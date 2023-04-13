
def get_next(fruits, start_type):
	for i in range(1, len(fruits)):
		if fruits[i] == start_type:
			pass
		else:
			return fruits[i]

fruits = [2,3,2,2,1,2,4]

till = len(fruits) - 1
collected_list = []

for start in range(till):
	collected_1 = fruits[start]
	collected_2 = get_next(fruits[start:], collected_1)
	# print(collected_1, collected_2)
	collected_1_count = 0
	collected_2_count = 0
	for f in fruits[start:]:
		if f == collected_1:
			collected_1_count += 1
		elif f == collected_2:
			collected_2_count += 1
		else:
			break

	total = collected_1_count + collected_2_count
	print(collected_1_count, collected_2_count, collected_1, collected_2)
	collected_list.append(total)

print(max(collected_list))





