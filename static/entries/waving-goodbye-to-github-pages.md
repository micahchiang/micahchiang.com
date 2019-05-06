# Waving goodbye to Github Pages

Written on May 6th in the year 2019.

---

For the last little while I've hosted this website on Github Pages and it's been great. It's super easy to setup, and super easy to deploy to. For these reasons it'd be easy to wonder why one should ever choose to move away from it. To be honest, I don't necessarily have a reason I can give as to why AWS is a better alternative for something like this. A small, personal website really doesn't need the scalability, options, or infrastructure that AWS offers. Indeed, it's probably overkill. However, since I did decide to move this site off of Github Pages and onto AWS, I thought I'd lay out some of the benefits AWS gives you:

1. AWS S3 has something like 99.9999% uptime. It hardly ever goes down.
2. AWS S3 for static websites is exceptionally scalable. Because all the content is static, you don't necessarily have to worry about load balance when site traffic increases. 
3. S3 plays really well with Cloudfront. Cloudfront allows you to set up a global CDN with relative ease. 
4. You can integrate Cloudfront with Lambda@Edge to run Node.js functions. 

The thing to bear in mind here is that these benefits apply to websites much larger and much more heavily trafficked than a humble personal blog. For that reason, I thought it was a good idea to learn how to use AWS. The focus here is more on the tools used than the reason for using them. Experience and knowledge of how to create a highly scalable and resilient site infrastructure is an invaluable thing to have in your toolbox. 