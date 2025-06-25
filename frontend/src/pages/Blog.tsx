import { useState,useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import axios from "axios";


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 20 Universities in Canada for International Students",
      excerpt: "Discover the best 10 Universities in Canada for international students with scholarships. Explore admissions criteria and career prospects.",
      image: "https://images.unsplash.com/photo-1630265928039-f9b3b23f0df9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MjAlMjBVbml2ZXJzaXRpZXMlMjBpbiUyMENhbmFkYSUyMGZvciUyMEludGVybmF0aW9uYWwlMjBTdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      author: "Disha Kaira",
      date: "July 30, 2024",
      readTime: "5 min read",
      category: "Study Abroad",
      tags: ["Canada", "Universities", "International Students"],
      link:"https://leverageedu.com/learn/top-20-universities-in-canada/"
    },
    {
      id: 2,
      title: "How To Know Which Career Is Best For You: A Complete Guide",
      excerpt  :"Guide how to know which career is best for you, explain the importance of choosing the right career and list some factors to consider when choosing a profession.",
      image: "https://images.unsplash.com/photo-1598870783714-7db1e192e047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhcHRvcCUyMGNhcmVlcnxlbnwwfHwwfHx8MA%3D%3D",
      author: "Indeed Editorial Team",
      date: "February 12, 2025",
      readTime: "8 min read",
      category: "Career Counseling",
      tags: ["Career", "Guidance", "Students"],
      link: "https://in.indeed.com/career-advice/finding-a-job/which-career-is-best-for-you"
    },
    {
      id: 3,
      title: "IELTS vs TOEFL : Which Test Should I Take?",
      excerpt: "Compare IELTS and TOEFL tests to determine which one is best suited for your study abroad goals and university requirements.",
      image: "https://images.unsplash.com/photo-1590591399656-22ce974df116?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SUVMVFMlMjB2cyUyMFRPRUZMJTIwJTNBJTIwV2hpY2glMjBUZXN0fGVufDB8fDB8fHww",
      author: "GFG Editorial Team",
      date: "April 15, 2025",
      readTime: "10 min read",
      category: "Test Preparation",
      tags: ["IELTS", "TOEFL", "English Tests"],
      link :"https://www.geeksforgeeks.org/ielts-vs-toefl/"
    },
    {
      id:4,
      title:"Study Visa Requirements by Country: A Comparative Guide",
      excerpt:"Breakdown of the study visa requirements for some of the most popular destinations for international students.",
      image:"https://images.unsplash.com/photo-1675649957266-2d2abeab4913?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author :"Immi Talks",
      date:"December 17, 2024",
      readTime:"5 min read",
      category : "Visa Guidance",
      tags: ["Visa", "Study Abroad"],
      link:"https://immitalks.com/study-visa-requirements-by-country-a-comparative-guide/"
    },
    {
      id: 5,
      title: "Top 10 Indian Government Scholarships for Studying Abroad",
      excerpt: "Explore various scholarship programs available for Indian students pursuing higher education in India and abroad.",
      image: "https://images.unsplash.com/photo-1665567032056-4d22d92638da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNjaG9sYXJzaGlwc3xlbnwwfHwwfHx8MA%3D%3D",
      author: "Shailja Kaushik",
      date: "September 12, 2024",
      readTime: "15 min read",
      category: "Scholarships",
      tags: ["Scholarships", "Financial Aid", "Education"],
      link :"https://blog.internshala.com/isa-indian-government-scholarships-for-studying-abroad/"
    },
    
    {
      id: 6,
      title: "Key changes in student visa requirements in top destinations",
      excerpt: "Complete guide to student visa requirements for USA, UK, Canada, Australia, and other popular study destinations.",
      image: "https://images.unsplash.com/photo-1655722724170-b3ab67a48791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9wJTIwZGVzdGluYXRpb25zJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D",
      author: "Roshni Chakrabarty",
      date: "January 29, 2024",
      readTime: "9 min read",
      category: "Visa Guidance",
      tags: ["Visa", "Study Abroad", "Immigration"],
      link:"https://www.indiatoday.in/education-today/study-abroad/story/study-abroad-student-visa-requirement-changes-in-top-destinations-2495053-2024-01-29"
    },
    {
      id: 7,
      title: "Preparing for University Interviews: Tips and Strategies",
      excerpt: "How to prepare effectively and perform confidently in your university interviews.",
      image: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
      author: "Dr. Sarah Chen",
      date: "February 2, 2024",
      readTime: "12 min read",
      category: "Admissions",
      tags: ["Interviews", "University", "Admissions"],
      link:"https://www.corbanglobal.co.uk/blog/university-interview-preparation"
    }
  ];

  const categories = [
    "All",
    "Study Abroad",
    "Career Counseling",
    "Test Preparation",
    "Scholarships",
    "Visa Guidance",
    "Admissions"
  ];

  const succesStories=[
    {
      name: 'Satish Jha',
      country: 'Malta',
      course : "MBA",
      story: 'Satish Jha always dreamt of working in an international corporate environment. With a strong determination, he pursued his MBA from a prestigious university in Malta. Throughout his journey, Satish demonstrated exceptional leadership, communication, and problem-solving skills. Studying in Malta gave him exposure to a multicultural environment and global business practices. He actively participated in business workshops and internships that polished his managerial abilities. After completing his MBA, Satish secured a management role in a leading European company. His story is a testament to how dedication, international education, and the right guidance can open doors to global opportunities. Today, Satish continues to inspire students who aspire to study abroad and make a mark on the international stage.',
      image: 'https://images.unsplash.com/photo-1748542685954-e49304dd4c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGElMjBzdHVkZW50JTIwc3RhbmRpbmclMjBpbiUyMGZyb25udCUyMG9mJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D', 
    },
    {
      name: 'Aditya Singh ',
      country: 'Singapore',
      course : "Diploma in Hospitality Management",
      story: 'Aditya Singh had a passion for hospitality and dreamed of working in some of the world’s top hotels. He took a bold step and enrolled in a Diploma in Hospitality Management in Singapore, known for its world-class hospitality industry. Throughout his course, Aditya excelled in both theoretical knowledge and hands-on training. His internships at five-star hotels in Singapore allowed him to develop exceptional customer service and operational skills. Aditya’s warm personality and hard work earned him recognition from his mentors and employers. After completing his diploma, he was offered a position at a leading hotel chain in Singapore. His journey is a perfect example of how determination and the right international exposure can turn dreams into reality.',
      image: 'https://media.istockphoto.com/id/1792136089/photo/portrait-of-young-student-boy-with-curly-hair.webp?a=1&b=1&s=612x612&w=0&k=20&c=0yon-oo0aPGcmXHjxbuQdL6Cx0TBBupS99Tbdrbwjao=', // Add your image paths here
    },
    {
      name: 'Pushkar tripathi ',
      country: 'Mauritius',
      course : "Diploma in Hospitality Management",
      story: 'Pushkar Tripathi was passionate about hospitality and wanted to experience global working cultures. He chose Mauritius, a beautiful island nation known for its tourism and hospitality excellence, to pursue his Diploma in Hospitality Management. Pushkar quickly adapted to the vibrant and diverse environment, gaining valuable experience through hands-on internships in luxury resorts and hotels. His ability to handle real-time challenges and his dedication to providing top-notch guest experiences set him apart. After graduation, Pushkar secured a management trainee position in a reputed hotel, which marked the beginning of a promising career in the hospitality industry. His story shows how taking bold steps and gaining international exposure can lead to a successful career path.',
      image: 'https://media.istockphoto.com/id/1023510502/photo/libyan-student-portrait-in-front-of-the-university-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=BT_AAbAR8xbBlWai2ipuB_oMVAiRC-dVYJrVFQ8eHA8=', // Add your image paths here
    },
    {
      name: 'Deepak Kumar',
      country: 'United kingdom',
      course : "MBA",
      story: 'Deepak Kumar always aspired to work in a fast-paced global business environment. He pursued his MBA in the United Kingdom, where he developed strong analytical, leadership, and strategic management skills. During his studies, Deepak engaged in international business projects and case competitions, which greatly enhanced his practical knowledge. The UK’s diverse student community and industry exposure helped him build a powerful network. After completing his MBA, Deepak received multiple job offers and eventually joined a top multinational consulting firm in London. His journey from a small town to the corporate hubs of the UK proves that with ambition and the right educational choices, one can achieve remarkable success on a global platform.',
      image: 'https://plus.unsplash.com/premium_photo-1681505727452-93076a810bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGElMjBzdHVkZW50JTIwc3RhbmRpbmclMjBpbiUyMGZyb25udCUyMG9mJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D', // Add your image paths here
    },
  ];
  

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);
  const [selectedStory, setSelectedStory] = useState<any>(null);


  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
  const handleClickOutside = () => {
    if (selectedStory) {
      setSelectedStory(null);
    }
  };

  if (selectedStory) {
    document.addEventListener('click', handleClickOutside);
  }

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [selectedStory]);


  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/subscribe`, { email });
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 409) {
        setStatus("You're already subscribed.");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    }
  };


  return (
    <div className="min-h-screen bg-[#EBEDDF]">
      {/* Hero Section */}
      <section className=" bg-[#EBEDDF] bg-gradient-to-r from-[#EBEDDF] to-[#EBEDDF] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Educational Blog</h1>
          <p className="text-xl text-zinc-800">
            Stay updated with the latest insights, tips, and trends in education and career development.
          </p>
        </div>
      </section>


      {/*Success Stories Section */}
      <section className="pt-10 pb-2 bg-[#EBEDDF]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <h2 className="text-3xl font-bold text-black mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {succesStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-[#b6b09f]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-black">{story.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">Country: {story.country}</p>
                  <p className="text-gray-700">Course: {story.course}</p>
                  <div className="p-6  flex justify-center ">
                    <button className="bg-zinc-800 hover:bg-[#e3e0f2] text-white hover:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                      onClick={(e) => {
                      e.stopPropagation(); // Prevent immediate close
                      setSelectedStory(story);}}>
                      Read Story
                    </button>
                  </div>
                </CardContent>
              </Card>     
            ))}
          </div>
          {/* Floating Story Box */}
          {selectedStory && (
            <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
            className="fixed top-40 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-2xl rounded-lg p-6 w-11/12 max-w-2xl z-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{selectedStory.name}</h3>
                  <p className="text-gray-700 mb-2"><strong>Country:</strong> {selectedStory.country}</p>
                  <p className="text-gray-700 mb-4"><strong>Course:</strong> {selectedStory.course}</p>
                  <p className="text-gray-700 mb-4"><strong>His Story:</strong></p>
                </div>
                <div className="w-36 h-36 flex-shrink-0">
                  <img src={selectedStory.image} alt={selectedStory.name} className="w-full h-full object-cover rounded-lg border border-gray-300 mb-4" />
                </div>
              </div>
              <p className="text-gray-800 text-justify">{selectedStory.story}</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-[#b6b09f]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#b6b09f] text-black">{featuredPost.category}</Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-[#b6b09f] text-[#b6b09f]">{tag}</Badge>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-[#e3e0f2] hover:text-black" 
                    onClick={() => window.open(featuredPost.link, "_blank")}>                    
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
              key={index}
              className="rounded-full bg-black text-white hover:bg-[#b6b09f] hover:text-black">
              {category}
              </Button>
            )            
          )}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-[#b6b09f]">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#b6b09f] text-black">{post.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-black">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#b6b09f] border-2 hover:text-black hover:bg-[#eae4d5]"
                    onClick={() => window.open(post.link, "_blank")}>
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#EBEDDF] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-zinc-800 mb-8">
            Subscribe to our newsletter and never miss an important update about education and career opportunities.
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black border border-[#b6b09f] focus:outline-none focus:border-[#eae4d5]"
            />
            <Button className="bg-[#b6b09f] text-black hover:bg-[#eae4d5]">
              Subscribe
            </Button>
          </div>*/}
          <form onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" required
              className="flex-1 px-4 py-3 rounded-lg text-black border border-[#060605] focus:outline-none focus:border-[#eae4d5]"
            />
            <Button type="submit"
            className="bg-[#c72828] text-white hover:bg-[#e3e0f2] hover:text-zinc-800 border-[#060605]">
              Subscribe
            </Button>
          </form>

          {status && (
          <p className="text-sm text-[#f2f2f2] mt-4">{status}</p>
        )}

        </div>
      </section>
    </div>
  );
};

export default Blog;
