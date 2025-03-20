import { BgIntro, IcLock } from "../../assets";

const Welcome = () => {
  return (
    <div className="items-center justify-center hidden w-full h-full border-l border-color18 bg-color2 sm:hidden md:hidden lg:flex">
      <div className="flex flex-col items-center justify-between">
        <img src={BgIntro} alt="Background" className="h-[22rem] w-[22rem]" />
        <h1 className="mb-3 text-3xl text-color11">WhatsApp Web</h1>
        <p className="text-sm text-color12">
          Kirim dan terima pesan tanpa perlu menghubungkan telepon Anda ke
          Internet.
        </p>
        <p className="text-sm text-color12">
          Gunakan WhatsApp di maksimal 4 perangkat tertaut dan 1 telepon
          sekaligus.
        </p>
        <div className="flex flex-row items-center justify-center mt-20 text-sm text-color5">
          <img src={IcLock} className="mr-2 h-[0.9rem] w-[0.9rem]" />
          Pesan pribadi Anda terenkripsi secara end-to-end
        </div>
      </div>
    </div>
  );
};

export default Welcome;
