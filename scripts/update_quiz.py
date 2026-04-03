import csv
import random
import os

def process_quizzes():
    base_dir = 'I:/MY_CODE/AIUD_March2026/data/quiz'
    files = ['MD1.csv', 'MD2.csv', 'MD3.csv', 'MD4.csv', 'MD5.csv', 'MD6.csv']
    # The user has some TN_BuoiXX and other files, but we only focus on MD1-MD6
    files = [f for f in files if os.path.exists(os.path.join(base_dir, f))]
    
    # Global pool of ALL wrong answers across ALL modules to maximize cross-pollination
    global_wrong_pool = []
    
    docs = {}
    for fname in files:
        filepath = os.path.join(base_dir, fname)
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = list(csv.DictReader(f))
            docs[fname] = {'data': reader, 'fieldnames': reader[0].keys()}
            
            for row in reader:
                ans_key = row.get('Answer', '').strip()
                if not ans_key: continue
                for opt in ['A', 'B', 'C', 'D']:
                    if opt != ans_key:
                        k = f"{opt}Answer" if f"{opt}Answer" in row else f"{opt}Ansver"
                        if k in row and row[k].strip():
                            global_wrong_pool.append(row[k].strip())

    print(f"Total wrong options in global pool: {len(global_wrong_pool)}")

    for fname, doc in docs.items():
        data = doc['data']
        for row in data:
            ans_key = row.get('Answer', '').strip()
            if not ans_key: continue
            
            correct_key = f"{ans_key}Answer" if f"{ans_key}Answer" in row else f"{ans_key}Ansver"
            if correct_key not in row: continue
            
            correct_val = row[correct_key].strip()
            target_len = len(correct_val)
            
            for opt in ['A', 'B', 'C', 'D']:
                if opt == ans_key: continue
                opt_key = f"{opt}Answer" if f"{opt}Answer" in row else f"{opt}Ansver"
                if opt_key not in row: continue
                
                val = row[opt_key].strip()
                # If difference in length is more than 6 characters, replace it!
                if abs(len(val) - target_len) > 6:
                    # Find candidates from global pool with length within +/- 4 of target length
                    # and ensure it's not exactly the correct answer or already in this row
                    existing_vals = [row.get(f"{x}Answer", row.get(f"{x}Ansver", "")).strip() for x in ['A','B','C','D']]
                    candidates = [
                        p for p in global_wrong_pool 
                        if abs(len(p) - target_len) <= 4 and p not in existing_vals and p != correct_val
                    ]
                    if candidates:
                        row[opt_key] = random.choice(candidates)
                    else:
                        # Fallback: widen search
                        candidates = [
                            p for p in global_wrong_pool 
                            if abs(len(p) - target_len) <= 8 and p not in existing_vals and p != correct_val
                        ]
                        if candidates:
                            row[opt_key] = random.choice(candidates)

        filepath = os.path.join(base_dir, fname)
        with open(filepath, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=doc['fieldnames'])
            writer.writeheader()
            writer.writerows(data)
        print(f"Successfully processed {fname}")

if __name__ == '__main__':
    process_quizzes()
