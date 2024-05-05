import MainHeadline from '@/components/core/MainHeadline';
import { SearchInput } from '@/components/core/SearchInput';
import Header from '@/components/Header';
export default function SearchPage() {
  return (
    <>
      <Header />
      <MainHeadline text="Welcome." />
      <SearchInput />
      <div className="flex justify-center mt-12">
        <p className="max-w-xs">
          Welcome to Innenanzeiger. Here you can select a train and then view it using the Interior Display simulation
          (a screen-like interface as if you were sitting in the same train). Bayerische Oberlandbahn & S-Bahn München
          similar screens (currently in beta) are currently supported. You can also select trains from other railway
          companies, but they will probably not be displayed correctly. As this is a simulation, the content here may
          well differ from the actual representations in the trains.
        </p>
      </div>
    </>
  );
}
