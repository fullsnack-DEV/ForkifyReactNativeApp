import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses" ,
    headers: {
        Authorization: 'Bearer 8FBVffsgkdN4FAOvRwrS8IOrywMKCJ0q2_ZmS-DW7CUda5iibBWICPEn4qwA5aUCdILY2FuFBZsHWhVn0AZ1NmuGXni5rekvsWeRUlQOfGP2SF_3evq65v-rZKhpX3Yx'   }

})