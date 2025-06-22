import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import axios from "axios";


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students 2024",
      excerpt: "Discover the best Canadian universities offering world-class education, research opportunities, and pathways to permanent residency.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Study Abroad",
      tags: ["Canada", "Universities", "International Students"]
    },
    {
      id: 2,
      title: "How to Choose the Right Career Path: A Complete Guide",
      excerpt: "A comprehensive guide to help students make informed career decisions based on their interests, skills, and market trends.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Career Counseling",
      tags: ["Career", "Guidance", "Students"]
    },
    {
      id: 3,
      title: "IELTS vs TOEFL: Which English Test Should You Take?",
      excerpt: "Compare IELTS and TOEFL tests to determine which one is best suited for your study abroad goals and university requirements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Dr. Priya Sharma",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Test Preparation",
      tags: ["IELTS", "TOEFL", "English Tests"]
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Indian Students in 2024",
      excerpt: "Explore various scholarship programs available for Indian students pursuing higher education in India and abroad.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Raj Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Scholarships",
      tags: ["Scholarships", "Financial Aid", "Education"]
    },
    {
      id: 5,
      title: "Student Visa Requirements for Popular Study Destinations",
      excerpt: "Complete guide to student visa requirements for USA, UK, Canada, Australia, and other popular study destinations.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Visa Guidance",
      tags: ["Visa", "Study Abroad", "Immigration"]
    },
    {
      id: 6,
      title: "Preparing for University Interviews: Tips and Strategies",
      excerpt: "Master the art of university interviews with expert tips, common questions, and strategies to make a lasting impression.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=250&q=80",
      author: "Dr. Sarah Johnson",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Admissions",
      tags: ["Interviews", "University", "Admissions"]
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

  

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

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
    <div className="min-h-screen bg-[#dfbddd]">
      {/* Hero Section */}
      <section className=" bg-[#2e141c] bg-gradient-to-r from-[#dfbddd] to-[#905989] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Educational Blog</h1>
          <p className="text-xl text-zinc-800">
            Stay updated with the latest insights, tips, and trends in education and career development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-[#dfbddd]">
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
                  <Button className="bg-black text-white hover:bg-[#b6b09f] hover:text-black">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#dfbddd]">
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
      <section className="py-20 bg-[#dfbddd]">
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
                    <Button size="sm" variant="ghost" className="text-[#b6b09f] hover:text-black hover:bg-[#eae4d5]">
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
      <section className="py-20 bg-[#dfbddd] text-black">
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
              className="flex-1 px-4 py-3 rounded-lg text-black border border-[#b6b09f] focus:outline-none focus:border-[#eae4d5]"
            />
            <Button type="submit"
            className="bg-[#c72828] text-white hover:bg-[#eae4d5] hover:text-zinc-800">
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
