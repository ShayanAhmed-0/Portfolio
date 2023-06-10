import Image from "next/image";
import React from "react";
import wa from "../../public/Images/Socials/whatsapp.png";
import git from "../../public/Images/Socials/github.png";
import insta from "../../public/Images/Socials/instagram.png";
import fb from "../../public/Images/Socials/facebook.png";
import linkdin from "../../public/Images/Socials/linkedin.png";
import twitter from "../../public/Images/Socials/twitter.png";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-center gap-10 space-y-10 items-center ">
<h1 className="hidden"></h1>

<button>
<Link target="_blank" href="https://github.com/ShayanAhmed-0">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={git} alt="Git logo" />
        </div>
        <p className="flex justify-center ">GITHUB</p>
      </div>
</Link>
</button>

<button>
  <Link target="_blank" href="https://www.linkedin.com/in/shayan-ahmed-97b661235/">
      <div className="space-y-4 hover:shadow-lg  rounded-3xl">
        <div className="flex justify-center">
          <Image src={linkdin} alt="Linkdin logo" />
        </div>
        <p className="flex justify-center">LINKDIN</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://twitter.com/Shayan__Ahmed_">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={twitter} alt="Twitter logo" />
        </div>
        <p className="flex justify-center">TWITTER</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://www.facebook.com/shayan.ahmed.75873/">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={fb} alt="Fb logo" />
        </div>
        <p className="flex justify-center">FACEBOOK</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://www.instagram.com/shayann.ahmedd/"> 
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={insta} alt="Insta logo" />
        </div>
        <p className="flex justify-center">INSTAGRAM</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://wa.me/+923418547003">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={wa} alt="whatsaap logo" />
        </div>
        <p className="flex justify-center">WHATSAPP</p>
      </div>
  </Link>
</button>

    </div>
  );
};

export default Socials;
