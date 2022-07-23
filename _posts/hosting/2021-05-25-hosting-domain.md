---
layout: post
title: "Hosting and Deployment of Website"
categories: networking jekyll update
permalink: "/groups/find/"
---

# How to buy a domain name

In our domain dashboard,
We can setup subdomain by giving a name.
We can see a folder for it in our Hosting dashboard.

# How to buy hosting provider for our web application.

# Hosting Static assets and Wordpress site is similar.

-We use filemanager or Ftp account to upload our website.

- We can delete server files.
- We upload our website into Public_html folder or public.
- Best way for multiple files is to make a zip file and upload. After upload we click extract button.
- Subdomain folder is seperate. Where we can put our blog or something.
  > Lastly, we find nameserver for primary and secondary domain.
  > Secondary domain is our subdomain.
- We add that to our accout on the domain name provider Manage nameserver section.

# Hosting Dynamic Web application needs out website to run files on the server to load files on users browser. So, setup is different.

# Github provides free hosting.

> We need to create a new repository.

- Name of repository: githubUsername.github.io
- upload files there.
  Thats it.
- To setup github as hosting our domain, we go to settings,
- Custom domain, add our Domain Name hosted elsewhere. save.
- Now we update our domain dashboard.
  In DNS management, we update cNAME Records.
- we add a CNAME Record, hostname: www and for
  value: githubUsername.github.io, add record.
- For without www, we can add A-Records, put nothing hostname: (empty) and for IPv4: github ipaddress from github repo.

Before we were updating our nameserver on our DNS management on domain dashboard, to host website with hosting providor.

Now, we are hosting website with github, we need to set back the nameservers on domain dashboard, DNS management.

To do that, we click Nameserver details and copy to Name Servers tab click and change it, we need at least two of them.
Update name server, wait for upto 24 hours.
So, after wait , we are loading our pages right from github. Anytime we change our files on github, within 15 minutes or so, changes reflect on our website, on our domain. http://beauteaches.tech
https://www.youtube.com/watch?v=NQP89ish9t8&t=2321s
