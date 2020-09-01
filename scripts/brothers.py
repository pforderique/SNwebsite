
import os

brothers_path = "../src/assets/images/brothers"

os.chdir(brothers_path)

valid = {".jpg", ".png", ".jpeg"}

for file in os.listdir():
	if file[-4:] in valid:
		print("import " + file[:-4] + " from '" + brothers_path + file + "'")

for file in os.listdir():
	if file[-4:] in valid:
		print("'" + file[:-4] + "' : "  + file[:-4])

