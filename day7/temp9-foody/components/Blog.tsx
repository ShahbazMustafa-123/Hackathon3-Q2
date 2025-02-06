

"use client";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { tomatobannerQuery } from '@/sanity/lib/queries';
import { BannerData } from '@/types/banner';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [allProducts, setAllProducts] = useState<BannerData[]>([]);
  const [expandedBlogId, setExpandedBlogId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products: BannerData[] = await client.fetch(tomatobannerQuery);
        setAllProducts(products || []);
      } catch (error) {
        console.error("Error fetching banner products:", error);
      }
    }
    fetchProducts();
  }, []);

  const blogs = [
    { id: 1, image: '/blog1.png', title: '10 Reasons To Do A Digital Detox Challenge', date: 'Feb 14, 2022', author: 'Admin', description: 'Taking a break from digital devices can enhance mental clarity, improve sleep patterns, and boost overall productivity. It reduces stress levels, fosters real-world connections, and helps regain control over time management. A digital detox allows you to engage in more meaningful activities and strengthens cognitive functions. Limiting screen time can improve focus and creativity while reducing eye strain and fatigue. A refreshed mind leads to better decision-making and improved well-being.' },
    { id: 2, image: '/blog2.png', title: 'How To Maintain A Healthy Work-Life Balance', date: 'Mar 10, 2022', author: 'Admin', description: 'Maintaining a balance between work and personal life is essential for mental and physical health. Setting clear boundaries helps reduce burnout and increases job satisfaction. Taking regular breaks allows for relaxation and rejuvenation, boosting productivity. Prioritizing self-care activities, such as exercise and hobbies, enhances overall happiness. Time management techniques improve efficiency, reducing stress levels. A well-balanced lifestyle fosters strong relationships and enhances personal fulfillment.' },
    { id: 3, image: '/blog3.png', title: 'The Benefits Of Mindful Eating', date: 'Apr 22, 2022', author: 'Admin', description: 'Mindful eating encourages awareness of hunger and fullness cues, leading to healthier eating habits. It promotes better digestion and nutrient absorption, reducing overeating tendencies. Taking time to savor meals enhances enjoyment and appreciation for food. Avoiding distractions while eating improves focus and portion control. Conscious food choices contribute to long-term health benefits, preventing lifestyle-related diseases. Practicing mindful eating fosters a positive relationship with food and overall well-being.' },
    { id: 4, image: '/blog4.png', title: 'Why You Should Start Journaling Today', date: 'May 5, 2022', author: 'Admin', description: 'Journaling helps in self-reflection, allowing individuals to express thoughts and emotions freely. It enhances mental clarity, reducing stress and anxiety levels. Keeping a journal improves goal setting and tracking progress effectively. Writing regularly strengthens cognitive abilities and enhances creativity. Documenting experiences fosters personal growth and self-awareness. A journaling habit provides a therapeutic outlet, leading to improved emotional well-being.' }
  ];

  const toggleDescription = (id: number) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div>
      <div className="relative">
        {allProducts.map((banner) => (
          <div key={banner._id} className="relative">
            {banner.image && (
              <Image
                src={urlFor(banner.image).url()}
                alt={"banner"}
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            )}

            {/* Centered Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold">Blog List</h1>
              <p className="mt-2 cursor-pointer flex items-center justify-center">
                Home <ChevronRight className="mx-1" />{" "}
                <span className="text-orange-500"> Blog </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black text-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-900 p-5 rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={450}
                className="w-auto h-auto object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-orange-500 font-semibold">{blog.date} | {blog.author}</p>
                <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
                <p className={`mt-3 text-gray-300 ${expandedBlogId === blog.id ? '' : 'line-clamp-2'}`}>
                  {blog.description}
                </p>
                <button
                  onClick={() => toggleDescription(blog.id)}
                  className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  {expandedBlogId === blog.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;