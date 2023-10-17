import Tabs from './components/Tabs';

function App() {
  return (
    <section className='container py-6 flex flex-col flex-wrap justify-start items-start '>
      <div className='flex w-full py-3 border-transparent border border-b-[#D7D8DA] flex-row items-center justify-start gap-[14px] '>
        <h1 className='text-[#0B101A] text-2xl font-bold leading-7 '>
          회원상세
        </h1>
        <p className='text-[#FF4D4F] font-medium text-sm leading-4 '>
          ˙ 필수항목
        </p>
      </div>
      <div className='my-3 w-full flex flex-row justify-start items-start '>
        <Tabs />
      </div>
    </section>
  );
}

export default App;

