"""
Parses information in the 
"""

import pandas
import csv
import json

def csv_to_json(csv_filename: str, output_filename: str, log=False):
    if log: print('[INFO] reading data from excel...', end='')
    excel_data_df = pandas.read_csv(csv_filename)
    excel_data_df.rename(columns = {'kerb':'email'}, inplace = True)
    excel_data_df['email'] += '@mit.edu'

    if log: print('done.\n[INFO] converting data to json...', end='')
    json_str = excel_data_df.to_json(orient='records')
    
    if log: print('done.\n[INFO] writing data to JSON...', end='')
    with open(output_filename, "w") as file:
        file.write(json_str)

    if log: print('done.\n[SUCCESS] task completed.')
    return output_filename

# csv_to_json(
#     csv_filename='./data/spreadsheets/active-brother-info.csv', 
#     output_filename='./data/active-brothers.json',
#     log=True
# )


def json_to_csv(json_filename: str, output_filename: str, log=False):
    if log: print('[INFO] reading data from json...', end='')
    with open(json_filename, "r") as f:
        bros = json.load(f)

    if log: print('[INFO] converting data to csv...', end='')
    with open(output_filename,"w") as f:
        columns = ['timestamp', 'name', 'email', 'major', 'year', 'pin',
            'nickname', 'hometown', 'bio','funMemoryWithAnotherBrother', 'img',
            'role']

        if log: print('done.\n[INFO] writing data to csv...', end='')
        output_rows = [','.join(columns)] # the header
        for bro in bros:
            bro_row = {col: '' for col in columns}
            for field in bro:
                if field in bro_row:
                    if field == 'major': bro_row[field] = str(bro[field]) + ' '
                    else: bro_row[field] = str(bro[field])
            output_rows.append(','.join(bro_row.values()))
        
        f.write('\n'.join(output_rows))

    if log: print('done.\n[SUCCESS] task completed.')
    return output_filename

json_to_csv(
    json_filename='./data/brotherInfo.json',
    output_filename='./data/spreadsheets/old_brothers.csv',
    log=True
)