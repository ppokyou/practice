"""xlrd example"""
import xlrd

def open_excel(file='./py/HPE.PerfCore.TruClientFootprintTestData.xls'):
    """open excel file"""
    try:
        data = xlrd.open_workbook(file)
        return data
    except Exception:
        print('exception throw')

def go_through_excel(file='./py/HPE.PerfCore.TruClientFootprintTestData.xls'):
    """print rows in excel one by one"""
    data = open_excel(file)
    table = data.sheet_by_name('Footprint')
    for i in range(table.nrows):
        print(table.row_values(i))

go_through_excel()
