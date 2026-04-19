import sqlite3
import os

db_path = r'i:/MY_CODE/WebPersionalLearning/pkt_research.db'

print(f"Checking database: {db_path}")
if not os.path.exists(db_path):
    print("Error: File does not exist")
    exit(1)

print(f"File size: {os.path.getsize(db_path)} bytes")

try:
    conn = sqlite3.connect(db_path, timeout=10)
    cursor = conn.cursor()
    
    print("Running integrity check...")
    res = cursor.execute('PRAGMA integrity_check').fetchone()
    print(f"Integrity Check: {res[0]}")
    
    print("Attempting to read user table...")
    res = cursor.execute('SELECT count(*) FROM user').fetchone()
    print(f"User Count: {res[0]}")
    
    print("Attempting to write test...")
    # SQLModel tables use lowercase class names usually (User -> user)
    # Let's just create a dummy table
    cursor.execute('CREATE TABLE IF NOT EXISTS _antigravity_test (id INTEGER PRIMARY KEY)')
    cursor.execute('INSERT INTO _antigravity_test DEFAULT VALUES')
    conn.commit()
    print("Write test: SUCCESS")
    
    cursor.execute('DROP TABLE _antigravity_test')
    conn.commit()
    print("Cleanup: SUCCESS")
    
except sqlite3.OperationalError as e:
    print(f"SQLite Operational Error: {e}")
    if "disk I/O error" in str(e).lower():
        print("DIAGNOSIS: The disk I/O error is confirmed. This typically means the OS/Hardware failed the request.")
except Exception as e:
    print(f"Unexpected Error: {e}")
finally:
    if 'conn' in locals():
        conn.close()
