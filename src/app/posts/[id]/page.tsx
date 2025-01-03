"use client";
import Image from "next/image";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";

const posts = [
  {
    id: "1",
    title: "The Modern Nomad: Exploring Digital Lifestyles",
    description:
      "This blog dives into the world of digital nomads, featuring tips on how to travel while working remotely, the best countries to work from, and tools for maintaining productivity on the go.",
    ImageUrl: "/images/img1.jpg",
  },
  {
    id: "2",
    title: "Sustainable Living Today: Eco-Friendly Solutions for Your Home",
    description:
      "This blog explores sustainable practices you can integrate into your daily life, from zero-waste solutions to energy-saving tips and sustainable food practices.",

  ImageUrl: "/images/img2.webp",
  },
  {
    id: "3",
    title: "Tech Innovations: The Future of Artificial Intelligence",
    description:
      "A deep dive into the world of AI, from its evolution to the latest trends, applications, and ethical implications of its development.",

    ImageUrl: "/images/img3.png",
  },
  {
    id: "4",
    title: "The Travel Taste: Culinary Adventures Around the World",
    description:
      "Join us on a journey around the globe as we explore diverse cuisines, hidden food gems, and culinary traditions of different countries.",

    ImageUrl: "/images/img4.jpg",
  },
  {
    id: "5",
    title: "Mastering Mindfulness: Your Guide to Inner Peace",
    description:
      "This blog focuses on meditation, mindfulness practices, and how to achieve mental clarity and stress reduction in today’s fast-paced world.",

  ImageUrl: "/images/img5.jpg",
  },
  {
    id: "6",
    title: "Fitness 360: Holistic Approaches to Health and Wellness",
    description:
      "A blog dedicated to physical, mental, and emotional wellness, covering exercise routines, nutrition, and mindfulness techniques for a balanced lifestyle",

    ImageUrl: "/images/img6.png",
  },
  {
    id: "7",
    title: "Tech Savvy Parents: Navigating Parenting in the Digital Age",
    description:
      "This blog provides advice on raising children in a digital world, covering screen time limits, educational apps, and tech-related parenting challenges.",

  ImageUrl: "/images/img7.webp",
  },
  {
    id: "8",
    title: "Eco-Warrior Fashion: Sustainable Clothing Brands You Should Know",
    description:
      "Discover eco-friendly fashion brands, sustainable fabrics, and tips for creating a sustainable wardrobe without compromising style.",

    ImageUrl: "/images/img8.png",
  },
  {
    id: "9",
    title: "The Green Thumb: Gardening Tips for Small Spaces",
    description:
      "Whether you have a balcony, rooftop, or small backyard, this blog offers expert gardening tips to help you grow your own fresh vegetables and herbs.",

    ImageUrl: "/images/img9.png",
  },
  {
    id: "10",
    title: "The Remote Work Revolution: Tips for Productivity and Balance",
    description:
      "Focused on remote work, this blog covers strategies for staying productive, managing work-life balance, and creating an effective home office environment.",

    ImageUrl: "/images/img10.png",
  },

  {
    id: "11",
    title: "The Rise of Remote Work: Embracing the Future of Employment",
    description:
      "Explore the shift towards remote work, its benefits, and how its shaping the future of employment. Learn how to build a productive home office and maintain a healthy work-life balance",

    ImageUrl: "/images/img11.png",
  },

  {
    id: "12",
    title:
      " The Future of Artificial Intelligence: Opportunities and Challenges",
    description:
      " Dive into the world of AI and explore its potential to revolutionize industries. Learn about the benefits, challenges, and ethical considerations surrounding AI technologies.",
    ImageUrl: "/images/img12.png",
  },
];
 

interface Params {
  id: string;
}

export default function Post({ params }: { params: Params }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  // Render paragraphs from description
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={500}
        />
      )}

      <div>{renderParagraphs(post.description)}</div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}








// export default function Post({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);

//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found </h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split("/n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}{" "}
//       </p>
//     ));
//   };
//   renderParagraphs();

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center ">
//         {" "}
//         {post.title}
//       </h1>

//       {post.ImageUrl && (
//         <Image
//         src={post.ImageUrl}
//         alt={post.title}/>
//       )}

//       <CommentSection postId={post.id} />
//       <AuthorCard />
//       <Footer />
//     </div>
//   );
// }








 

