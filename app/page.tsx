import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero"; 
import SearchOptions from "@/components/SearchOptions"; 
import FlightSearch from "@/components/FlightSearch"; 
import SearchExtras from "@/components/SearchExtras"; 
import ConfidenceSection from "@/components/ConfidenceSection";
import RecommendedTrips from "@/components/RecommendedTrips";

export default function Home() { 
  return ( 
    <> 
      <Navbar /> 
      <Hero /> 
      <SearchOptions /> 
      <FlightSearch /> 
      <SearchExtras /> 
      <ConfidenceSection />
      <RecommendedTrips />
    </> 
  ); 
}
