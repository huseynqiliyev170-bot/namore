import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Services";
import FeaturesSection from "@components/sections/Features";
import Hero2Section from "@components/sections/Hero2";
import Hero3Section from "@components/sections/Hero3";
import RoomsSection from "@components/sections/Rooms";
import CallToActionSection from "@components/sections/CallToAction";
import AboutUsSection from "@components/sections/AboutUs";
import AboutUs2Section from "@components/sections/AboutUs2";
import TestimonialSlider from "@components/sliders/Testimonial";
import LatestPostsSection from "@components/sections/LatestPosts";
import PageIntro from "@components/page/PageIntro";
import CountersSection from "@components/sections/Counters";
import AboutUs3Section from "@components/sections/AboutUs3";
import ContactFormSection from "@components/sections/Contact";
import ContactsInfoSection from "@components/sections/ContactsInfo";
import ContactMapSection from "@components/sections/ContactMap";
import TextSection from "@components/sections/Text";

const PageBlocks = ({ blocks, collections }) => {
  const getComponent = (block, key) => {
    switch (block.collection) {
      case 'block_hero':
        return <HeroSection {...block.item} key={key} />
      case 'block_hero2':
        return <Hero2Section {...block.item} key={key} />
      case 'block_hero3':
        return <Hero3Section {...block.item} key={key} />
      case 'block_services':
        return <ServicesSection items={collections['services']} {...block.item} key={key} />
      case 'block_features':
        return <FeaturesSection {...block.item} key={key} />
      case 'block_featured_rooms':
        return <RoomsSection rooms={collections['featured_rooms']} {...block.item} key={key} />
      case 'block_call_to_action':
        return <CallToActionSection {...block.item} key={key} />
      case 'block_about_us':
        return <AboutUsSection {...block.item} key={key} />
      case 'block_about_us2':
        return <AboutUs2Section {...block.item} key={key} />
      case 'block_testimonials':
        return <TestimonialSlider {...block.item} key={key} />
      case 'block_latest_posts':
        return <LatestPostsSection posts={collections['latest_posts']} {...block.item} key={key} />
      case 'block_intro':
        return <PageIntro {...block.item} key={key} />
      case 'block_counters':
        return <CountersSection {...block.item} key={key} />
      case 'block_about_us3':
        return <AboutUs3Section {...block.item} key={key} />
      case 'block_contact_form':
        return <ContactFormSection {...block.item} key={key} />
      case 'block_contacts_info':
        return <ContactsInfoSection {...block.item} key={key} />
      case 'block_contact_map':
        return <ContactMapSection {...block.item} key={key} />
      case 'block_text':
        return <TextSection {...block.item} key={key} />
    }
  }

  return (
    <>
        { blocks.map((block, key) => getComponent(block, key)) }
    </>
  );
};
export default PageBlocks;
