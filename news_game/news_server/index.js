var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var cors = require('cors');

// app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

document.onload() {
    
    // do first api call
   

}

var articles = {
    'hi': null,
    "articles": [   
        {
            "author": "Carissa Lintao",
            "title": "I found everything on Tinder except my dream date",
            "description": "Tinder was one of the first innovative apps to break out on the dating scene. The app boasts over 10 million matches, but there’s a dark side of Tinder one needs to swipe through ...",
            "url": "https://thenextweb.com/apps/2017/08/20/found-everything-tinder-except-dream-date/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/Tinder-1-social.jpg",
            "publishedAt": "2017-08-20T20:18:28Z"
        },
        {
            "author": "Tristan Greene",
            "title": "Get started in cryptocurrency with this beginner’s directory",
            "description": "The wonderful world of cryptocurrency has grown from a budding idea to a full-fledged market bonanza. Hopefully you're savvy to the terminology and ready to start putting your money ...",
            "url": "https://thenextweb.com/evergreen/2017/08/20/get-started-cryptocurrency-beginners-directory/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/bitcoinmodern-social.jpg",
            "publishedAt": "2017-08-20T17:09:04Z"
        },
        {
            "author": "Len Shneyder",
            "title": "Social media didn’t kill email — but it did change it",
            "description": "Too much digital ink has been spilled over the apparent demise of email. “What’s to replace email,” and “why email is dead,” are all well-worn topics musing over a thin premise: ...",
            "url": "https://thenextweb.com/contributors/2017/08/20/social-media-didnt-kill-email-change/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/pexels-photo-261706-social.jpeg",
            "publishedAt": "2017-08-20T16:30:04Z"
        },
        {
            "author": "TNW Deals",
            "title": "Become a white hat hacker for fun and profit – pay only what you want",
            "description": "White hat hacking is a job that pays very well, mostly because very few candidates have the talent to topple firewalls and drill into the most sensitive depths of a supposedly well-protected ...",
            "url": "https://thenextweb.com/offers/2017/08/20/become-a-white-hat-hacker-for-fun-and-profit-pay-only-what-you-want/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/7TzOEK1-1-social.jpg",
            "publishedAt": "2017-08-20T16:00:00Z"
        },
        {
            "author": "Firas Kittaneh",
            "title": "How you and your co-founder can develop a reliable relationship",
            "description": "Many entrepreneurs think that once they’ve found the right person to partner with, the rest of the relationship will be smooth sailing. While it's true that finding someone with shared ...",
            "url": "https://thenextweb.com/contributors/2017/08/20/nurture-develop-reliable-co-founder-relationships/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/pexels-photo-429248-social.jpeg",
            "publishedAt": "2017-08-20T12:30:51Z"
        },
        {
            "author": "Mark Geil",
            "title": "Military-funded prosthetic technologies benefit veterans, but also kids",
            "description": "In 1905, an Ohio farmer survived a railroad accident that cost him both of his legs. Two years later, he founded the Ohio Willow Wood company, using the namesake timber to hand-carve ...",
            "url": "https://theconversation.com/military-funded-prosthetic-technologies-benefit-more-than-just-veterans-76891",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/pic-social.jpg",
            "publishedAt": "2017-08-20T10:30:19Z"
        },
        {
            "author": "Anas Baig",
            "title": "Merging big data and AI is the next step",
            "description": "AI is one of hottest trends in tech at the moment, but what happens when it's merged with another fashionable and extremely promising tech?\r\n\r\nResearchers are looking for ways to take ...",
            "url": "https://thenextweb.com/contributors/2017/08/19/merging-big-data-ai-next-step/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/technology-2062712_1280-social.jpg",
            "publishedAt": "2017-08-19T23:30:58Z"
        },
        {
            "author": "George Beall",
            "title": "How startup founders can avoid excessive debt",
            "description": "Cold morning light showers your back as you contemplate whether to file for bankruptcy or to continue believing in your startup’s mission. As your mind wanders, you think back to ...",
            "url": "https://thenextweb.com/contributors/2017/08/19/startup-founders-can-avoid-excessive-debt/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/credit-squeeze-522549_1920-social.jpg",
            "publishedAt": "2017-08-19T20:53:02Z"
        },
        {
            "author": "Mark Newcomer",
            "title": "Design thinking has to keep up with the future of human-machine interactions",
            "description": "As devices, technologies and new UI paradigms emerge and converge, consumers’ reliance on screens as the primary interface will shift, and websites and screen-based interactions will ...",
            "url": "https://thenextweb.com/contributors/2017/08/19/future-design-thinking/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/pexels-photo-212286-social.jpeg",
            "publishedAt": "2017-08-19T16:30:40Z"
        },
        {
            "author": "TNW Deals",
            "title": "Train to use Salesforce to guide any business the right way — for only $59",
            "description": "Just because you have a profitable, even revolutionary idea for a business doesn’t mean you automatically know how to run that business. It often takes leaders months or even years ...",
            "url": "https://thenextweb.com/offers/2017/08/19/train-to-use-salesforce-to-guide-any-business-the-right-way-for-only-59/",
            "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/it7nd0R-1-social.jpg",
            "publishedAt": "2017-08-19T16:02:00Z"
        }
    ]
}


var id = 0;

app.get('/top_stories', function(req, res){
    
    res.json(articles);
});
//
// app.get('/lions/:id', function(req, res){
//     var lion = _.find(lions, {id: req.params.id});
//     res.json(lion || {});
// });
//
// app.post('/lions', function(req, res) {
//     var lion = req.body;
//     id++;
//     lion.id = id + '';
//
//     lions.push(lion);
//
//     res.json(lion);
// });
//
//
// app.put('/lions/:id', function(req, res) {
//     var update = req.body;
//     if (update.id) {
//         delete update.id
//     }
//
//     var lion = _.findIndex(lions, {id: req.params.id});
//     if (!lions[lion]) {
//         res.send();
//     } else {
//         var updatedLion = _.assign(lions[lion], update);
//         res.json(updatedLion);
//     }
// });

app.listen(3030);
console.log('on port 3030');