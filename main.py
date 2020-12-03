
names = ['Jenny', 'Alexus', 'Sam', 'Grace']
dogs_names = ['Elphonse', 'Dr. Doggy DDS', 'Carter', 'Ralph']
names_and_dogs_names = zip(names, dogs_names)
print(list(names_and_dogs_names))


# class PlayerCharacter:
#     #class object attribute not dynamic 
#     membership = True
#     def __init__(self, name="anonymous", age=0):
#       if (age > 18): 
#         self.name = name
#         self.age = age
#     def run(self):
#         print('run')
#     def shout(self):
#         print(f'my name is {self.name}')
# player1 = PlayerCharacter('Tom', 10)
# player2 = PlayerCharacter()
# player2.attack = 50

# print(player1.shout())
# print(player2.age)

#Given the below class:
class Cat:
    species = 'mammal'
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def oldest(*args):
        return max(args)
cat1= Cat("Tom", 3)
cat2= Cat('Jerry', 5)
cat3= Cat("filbert", 2)
def oldest(*args):
        return max(args)
print(f"The oldest cat is {oldest(cat1.age, cat2.age, cat3.age)} years old.")
# 1 Instantiate the Cat object with 3 cats



# 2 Create a function that finds the oldest cat



# 3 Print out: "The oldest cat is x years old.". x will be the oldest cat age by using the function in #2