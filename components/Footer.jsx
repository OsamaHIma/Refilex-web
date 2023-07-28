import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter  f-container md:!justify-between">
        <div className="flexColStart f-left !items-center gap-4 text-center md:!items-start md:!text-left">
          <div className="rounded-full bg-indigo-600 px-3 py-2 dark:bg-transparent">
            <Image src="/logo.png" alt="logo" width={133} height={133} />
          </div>
          <h3 className="secondaryText">
            Start With a selection of the best experts,
            <br />
            Empower your business with our services.
          </h3>
        </div>
        <div className="flexColStart f-right !items-center text-center">
          <span className="primaryText dark:text-indigo-500">Information</span>
          <span className="secondaryText">21 Fawakeh Dokki, Cairo, Egypt</span>
          <div className="flexCenter f-menu mt-6 gap-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
