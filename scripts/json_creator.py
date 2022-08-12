"""
Parses information in the 
"""

import pandas
import json
import re

def clean_date(text):
    date_search = re.search(
        '(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2}:\d{2})\.\d{3}Z', text)

    if not date_search:
        return text

    year = date_search.group(1)
    month = str(int(date_search.group(2)))
    day = str(int(date_search.group(3)))
    time = date_search.group(4)

    return '/'.join([month, day, year]) + ' ' + time


def tsv_to_json(csv_filename: str, output_filename: str, log=False):
    if log: print('[INFO] reading data from excel...', end='')
    excel_data_df = pandas.read_csv(csv_filename, sep='\t')
    # excel_data_df.rename(columns = {'kerb':'email'}, inplace = True)
    # excel_data_df['email'] += '@mit.edu'

    if log: print('done.\n[INFO] converting data to json...', end='')
    json_str = excel_data_df.to_json(orient='records', double_precision=0)
    
    if log: print('done.\n[INFO] writing data to JSON...', end='')
    with open(output_filename, "w") as file:
        file.write(json_str)

    if log: print('done.\n[SUCCESS] task completed.')
    return output_filename

tsv_to_json(
    csv_filename='./data/spreadsheets/all-brothers.tsv', 
    output_filename='./data/all-brothers.json',
    log=True
)


def json_to_tsv(json_filename: str, output_filename: str, log=False):
    if log: print('[INFO] reading data from json...', end='')
    with open(json_filename, "r") as f:
        bros = json.load(f)

    if log: print('done.\n[INFO] converting data to csv...', end='')
    with open(output_filename, "w", encoding="utf-8") as f:
        columns = ['timestamp', 'name', 'kerb', 'major', 'year', 'pin',
            'nickname', 'hometown', 'bio','funMemoryWithAnotherBrother', 'img',
            'role']

        if log: print('done.\n[INFO] writing data to csv...', end='')
        output_rows = ['\t'.join(columns)] # the header
        for bro in bros:
            bro_row = {col: '' for col in columns}
            for field in bro:
                if field not in bro_row: continue
                # if field == 'major': bro_row[field] = str(bro[field]) else
                bro_row[field] = clean_date(str(bro[field]))
            output_rows.append('\t'.join(bro_row.values()))
        
        f.write('\n'.join(output_rows))

    if log: print('done.\n[SUCCESS] task completed.')
    return output_filename

# json_to_tsv(
#     json_filename='./data/all-brothers.json',
#     output_filename='./data/spreadsheets/all-brothers.tsv',
#     log=True
# )
