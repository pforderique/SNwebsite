"""
Parses information in the 
"""

import pandas

def csv_to_json(csv_filename: str, output_filename: str, log=False):
    if log: print('[INFO] reading data from excel...', end='')
    excel_data_df = pandas.read_csv(csv_filename)

    if log: print('done.\n[INFO] converting data to json...', end='')
    json_str = excel_data_df.to_json(orient='records')
    
    if log: print('done.\n[INFO] writing data to JSON...', end='')
    with open(output_filename, "w") as file:
        file.write(json_str)

    if log: print('done.\n[SUCCESS] task completed.')
    return output_filename

csv_to_json(
    csv_filename='./data/spreadsheets/active-brother-info.csv', 
    output_filename='./data/active-brothers.json',
    log=True)