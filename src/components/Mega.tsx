import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "The Modern Nomad: Exploring Digital Lifestyles",
      description:
        "This blog dives into the world of digital nomads, featuring tips on how to travel while working remotely, the best countries to work from, and tools for maintaining productivity on the go.",
      date: "2025-03-01",
      imageUrl: "/images/img1.jpg",
    },
    {
      id: "2",
      title: "Sustainable Living Today: Eco-Friendly Solutions for Your Home",
      description:
        "This blog explores sustainable practices you can integrate into your daily life, from zero-waste solutions to energy-saving tips and sustainable food practices.",
      date: "2025-03-01",
      imageUrl: "/images/img2.webp",
    },
    {
      id: "3",
      title: "Tech Innovations: The Future of Artificial Intelligence",
      description:
        "A deep dive into the world of AI, from its evolution to the latest trends, applications, and ethical implications of its development.",
      date: "2025-03-01",
      imageUrl: "/images/img3.png",
    },
    {
      id: "4",
      title: "The Travel Taste: Culinary Adventures Around the World",
      description:
        "Join us on a journey around the globe as we explore diverse cuisines, hidden food gems, and culinary traditions of different countries.",
      date: "2025-03-01",
      imageUrl: "/images/img4.jpg",
    },
    {
      id: "5",
      title: "Mastering Mindfulness: Your Guide to Inner Peace",
      description:
        "This blog focuses on meditation, mindfulness practices, and how to achieve mental clarity and stress reduction in today’s fast-paced world.",
      date: "2025-03-01",
      imageUrl: "/images/img5.jpg",
    },
    {
      id: "6",
      title: "Fitness 360: Holistic Approaches to Health and Wellness",
      description:
        "A blog dedicated to physical, mental, and emotional wellness, covering exercise routines, nutrition, and mindfulness techniques for a balanced lifestyle",
      date: "2025-03-01",
      imageUrl: "/images/img6.png",
    },
    {
      id: "7",
      title: "Tech Savvy Parents: Navigating Parenting in the Digital Age",
      description:
        "This blog provides advice on raising children in a digital world, covering screen time limits, educational apps, and tech-related parenting challenges.",
      date: "2025-03-01",
      imageUrl: "/images/img7.webp",
    },
    {
      id: "8",
      title: "Eco-Warrior Fashion: Sustainable Clothing Brands You Should Know",
      description:
        "Discover eco-friendly fashion brands, sustainable fabrics, and tips for creating a sustainable wardrobe without compromising style.",
      date: "2025-03-01",
      imageUrl: "/images/img8.png",
    },
    {
      id: "9",
      title: "The Green Thumb: Gardening Tips for Small Spaces",
      description:
        "Whether you have a balcony, rooftop, or small backyard, this blog offers expert gardening tips to help you grow your own fresh vegetables and herbs.",
      date: "2025-03-01",
      imageUrl: "/images/img9.png",
    },
    {
      id: "10",
      title: "The Remote Work Revolution: Tips for Productivity and Balance",
      description:
        "Focused on remote work, this blog covers strategies for staying productive, managing work-life balance, and creating an effective home office environment.",
      date: "2025-03-01",
      imageUrl: "/images/img10.png",
    },
    {
      id: "11",
      title: "The Rise of Remote Work: Embracing the Future of Employment",
      description:
        "Explore the shift towards remote work, its benefits, and how its shaping the future of employment. Learn how to build a productive home office and maintain a healthy work-life balance",
      date: "2025-03-01",
      imageUrl: "/images/img11.png",
    },

    {
      id: "12",
      title:
        " The Future of Artificial Intelligence: Opportunities and Challenges",
      description:
        " Dive into the world of AI and explore its potential to revolutionize industries. Learn about the benefits, challenges, and ethical considerations surrounding AI technologies.",
      date: "2025-03-01",
      imageUrl: "/images/img12.png",
    },

  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
