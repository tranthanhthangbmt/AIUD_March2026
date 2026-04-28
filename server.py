import http.server
import socketserver
import json
import urllib.request
import urllib.error
import urllib.parse
import os

PORT = 8000
GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrOqIP-TVpOJ7-F8YrqJnawZWfSWioWYbS3i5JCUtqpIKYPBtkQVdXrbiFFC18CwB3/exec'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Đảm bảo không bị lỗi CORS nếu truy cập qua 127.0.0.1 hay localhost
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

    def do_GET(self):
        # API để kiểm tra trạng thái Sheet
        if self.path.startswith('/api/check_sheet'):
            query = urllib.parse.urlparse(self.path).query
            params = urllib.parse.parse_qs(query)
            class_name = params.get('className', [''])[0]
            
            if class_name:
                try:
                    # Chuyển tiếp GET request tới Google Apps Script
                    target_url = f"{GOOGLE_APPS_SCRIPT_URL}?action=check_sheet&className={urllib.parse.quote(class_name)}"
                    req = urllib.request.Request(target_url)
                    with urllib.request.urlopen(req) as response:
                        google_response = response.read()
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(google_response)
                    return
                except Exception as e:
                    print(f"[PROXY ERROR] Lỗi check_sheet: {e}")
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
                    return
        
        # Nếu không phải API, phục vụ file tĩnh bình thường
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/submit_exam':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                # Đọc dữ liệu JSON từ frontend
                payload_str = post_data.decode('utf-8')
                # Kiểm tra xem có phải JSON hợp lệ không
                json.loads(payload_str)
                
                print("\n[PROXY] Đang nhận dữ liệu điểm từ trình duyệt...")
                print(f"[PROXY] Đang forward dữ liệu lên Google Sheets...")
                
                # Bắn nguyên vẹn chuỗi JSON lên Google Sheets
                req = urllib.request.Request(
                    GOOGLE_APPS_SCRIPT_URL,
                    data=post_data,
                    headers={'Content-Type': 'text/plain'}
                )
                
                with urllib.request.urlopen(req) as response:
                    google_response = response.read().decode('utf-8')
                    print(f"[PROXY] Phản hồi từ Google: {google_response}")
                
                # Trả về thành công cho frontend
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "google_response": google_response}).encode('utf-8'))
                
            except urllib.error.URLError as e:
                print(f"[PROXY ERROR] Lỗi mạng khi gọi Google Sheets: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
            except Exception as e:
                print(f"[PROXY ERROR] Lỗi không xác định: {e}")
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Not Found")

# Khởi động máy chủ
os.chdir(os.path.dirname(os.path.abspath(__file__)))
Handler = CustomHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"==================================================")
    print(f"🚀 HỆ THỐNG MÁY CHỦ KHẢO THÍ AIUD ĐANG CHẠY")
    print(f"==================================================")
    print(f"👉 Hãy truy cập vào địa chỉ: http://localhost:{PORT}")
    print(f"==================================================")
    print(f"Vui lòng không tắt cửa sổ đen này trong quá trình thi!\n")
    httpd.serve_forever()
