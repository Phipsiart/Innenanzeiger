import MainHeadline from '@/components/core/MainHeadline';
import { SearchInput } from '@/components/core/SearchInput';
import Header from '@/components/Header';
export default function SearchPage() {
  return (
    <>
      <Header />
      <MainHeadline text="Welcome." subtitle="Select the desired start and destination stop. Let the journey begin!" />
      <SearchInput />
      <div className="flex justify-center ">
        <p className="max-w-xs">
        </p>
      </div>
    </>
  );
}
