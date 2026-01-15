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
      image: "https://images.unsplash.com/photo-1630265928039-f9b3b23f0df9?w=600&auto=format&fit=crop&q=60",
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
      excerpt:"Guide how to know which career is best for you, explain the importance of choosing the right career and list some factors to consider when choosing a profession.",
      image: "https://images.unsplash.com/photo-1598870783714-7db1e192e047?w=600&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1590591399656-22ce974df116?w=600&auto=format&fit=crop&q=60",
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
      image:"https://images.unsplash.com/photo-1675649957266-2d2abeab4913?w=600&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1665567032056-4d22d92638da?w=600&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1655722724170-b3ab67a48791?w=600&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=600&auto=format&fit=crop&q=60",
      author: "Dr. Sarah Chen",
      date: "February 2, 2024",
      readTime: "12 min read",
      category: "Admissions",
      tags: ["Interviews", "University", "Admissions"],
      link:"https://www.corbanglobal.co.uk/blog/university-interview-preparation"
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-[#0A3D62] mb-6">
          Educational Blog
        </h1>
        <p className="text-xl text-[#2C2C2C]">
          Stay updated with the latest insights, tips, and trends in education and career development.
        </p>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-8">
            Featured Article
          </h2>
          <Card className="bg-white border border-[#D1D5DB] hover:shadow-lg">
            <div className="grid lg:grid-cols-2">
              <img src={featuredPost.image} className="h-full w-full object-cover"/>
              <div className="p-8">
                <Badge className="bg-[#E6F0FA] text-[#1E90FF] mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-[#2C2C2C] mb-6">{featuredPost.excerpt}</p>
                <Button
                  className="bg-[#0A3D62] text-white hover:bg-[#49749f] border-none"
                  onClick={() => window.open(featuredPost.link, "_blank")}
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-12">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="bg-white border border-[#D1D5DB] hover:shadow-lg">
                <img src={post.image} className="h-48 w-full object-cover"/>
                <CardHeader>
                  <CardTitle className="text-[#0A3D62]">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C2C2C] text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    size="sm"
                    className="bg-[#0A3D62] text-white hover:bg-[#49749f] border-none"
                    onClick={() => window.open(post.link, "_blank")}
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4"/>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;