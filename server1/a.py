
class Test:

    def __init__(self, string):
        self.string = string

    def __add__(self, other):
        if type(self.string) is str:
            return self.string + str(1) + str(other)
        else:
            if type(other) is int:
                return int(self.string) + 1 + other
            else:
                return int(self.string) + 1 + len(other)
                

    
if __name__ == "__main__":

    string1 = Test(2)
    print(string1 + "world")