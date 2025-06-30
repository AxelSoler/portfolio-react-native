import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './index.css';

const SocialLinks = () => (
  <div className="socialMedia">
    <ul className="ulSocial bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-[#fffefe] dark:to-[#cecece]">
      <li className="social">
        <a
          href="https://github.com/AxelSoler"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <BsGithub size="28px" className='text-white dark:text-[#004aad]' />
        </a>
      </li>
      <li className="social">
        <a
          href="https://www.linkedin.com/in/axel-soler-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin size="28px" className='text-white dark:text-[#004aad]' />
        </a>
      </li>
      <li className="social">
        <a
          href="https://angel.co/u/axel-soler"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Angellist"
        >
          <FaAngellist size="28px" className='text-white dark:text-[#004aad]' />
        </a>
      </li>
      <li className="social">
        <a
          href="https://twitter.com/AxelSoler18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <BsTwitter size="28px" className='text-white dark:text-[#004aad]' />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialLinks;
