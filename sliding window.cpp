class Solution {
public:
   vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> v;
        int n = nums.size();
        priority_queue<pair<int,int>> pq;
        for(int i=0;i<k-1;i++)
            pq.push({nums[i],i});
        for(int i=0;i<=n-k;i++)
        {
            pq.push({nums[i+k-1],i+k-1});
            while(pq.top().second<i)
                pq.pop();
            if(pq.top().second>i)
            {
                v.push_back(pq.top().first);
            }
            else if(pq.top().second==i)
            {
                v.push_back(pq.top().first);
                pq.pop();
            }
        }
        return v;
    }
};
