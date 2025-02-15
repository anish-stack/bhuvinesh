
import React from "react";
import axios from 'axios'
import SingleProperty from "@/components/SingleProperty";

export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const response = await axios.get(`https://www.apidemo.propsavvyrealtors.com/api/v1/get_property_slug/${slug}`);
    // console.log('API response:', response.data); // Ensure this shows the full structure

    if (!response.data || !response.data.data) {
      throw new Error('Invalid response structure');
    }

    const blog = response.data.data;

    return {
      title: blog?.MetaTitle || 'Blog',
      description: blog.MetaDescription || 'Blog details',
      openGraph: {
        title: blog?.MetaTitle || 'Blog',
        description: blog.MetaDescription || 'Blog details',
      }
    };
  } catch (error) {
    console.error('Error fetching blog data:', error.message);

    // Return default metadata in case of error
    return {
      title: 'Blog',
      description: 'Blog details ',
      openGraph: {
        title: 'Blog',
        description: 'Blog details '
      }
    };
  }
}

export default async function PropertyPage({ params }) {
  const { slug } = params;
  return (
    <SingleProperty slug={slug} />
  )
}
