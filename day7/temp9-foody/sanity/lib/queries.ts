import { groq } from 'next-sanity';




export const allfoodQuery = groq`*[_type == "food"]`;

export const allchefQuery = groq`*[_type == "chef"]`;

export const threehefQuery = groq`*[_type == "chef"][0..2]`;

export const threeProductsQuery = groq`*[_type == "food"][0..2]`;

export const fiveProductsQuery = groq`*[_type == "food"][1..4]`;

export const DrinksQuery  = groq`*[_type == "food"][0..0]`; 

export const StarterManuQuery = groq`*[_type == "food"][1..1]`;

export const MainCourseQuery = groq`*[_type == "food"][2..2]`; 

export const DessertQuery = groq`*[_type == "food"][3..3]`; 

export const bannerQuery = groq`*[_type == 'banner' && "banner" in tags]`;

export const tomatobannerQuery = groq`*[_type == 'banner' && "tomatobanner" in tags]`;

export const getEssentialsMensQuery = groq`*[_type == 'banner' && "men" in tags]`;

export const getEssentialsWomensQuery = groq`*[_type == 'banner' && "women" in tags]`;

export const getEssentialsmmanQuery = groq`*[_type == 'banner' && "mmen" in tags]`;

export const getEssentialswwomenQuery = groq`*[_type == 'banner' && "wwomen" in tags]`;