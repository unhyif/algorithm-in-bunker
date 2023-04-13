class Solution:
    def putDashTogether(self, length, upper_case, k):
        ans=''
        n=1
        for i in range(length):
            if n%k==0 and i != length - 1:
                ans += upper_case[i] + '-'
            elif n%k==0 and i == length - 1:
                ans += upper_case[i]
            else:
                ans += upper_case[i]
            n+=1
        return ans
    
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        print(s, k)
        remove_dash = s.replace('-', '')
        upper_case = remove_dash.upper()
        a = ''
        length = len(upper_case)
        remainder = length % k
        if remainder == 0:
            a = self.putDashTogether(length, upper_case, k)
        else:
            x = upper_case[remainder:]
            y = upper_case[:remainder]
            a = self.putDashTogether(len(x), x, k)
            if length<k:
                a=y
            else:
                a = y + '-' + a
        return a
            
            