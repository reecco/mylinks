import { FaInstagram, FaSpotify, FaTwitch } from 'react-icons/fa'

import styles from './Links.module.css'

function Links() {
  const list = [
    {
      "name": "Instagram", "url": "https://instagram.com/frrecco", "icon": <FaInstagram />
    },
    {
      "name": "Spotify", "url": "https://open.spotify.com/user/a4qbquemburyvucphwgk4ezg1", "icon": <FaSpotify />
    },
    {
      "name": "Twitch", "url": "https://twitch.tv/dericojs", "icon": <FaTwitch />
    },
  ]

  return (
    <div className={styles.containerList}>
      <ul className={styles.list}>
        {list.map((link, index) =>
          <li key={index}>
            <a className={styles.link} href={link.url} target="_ublank">
              <i className={styles.icon}>{link.icon}</i>
              <p className={styles.url}>{link.name}</p>
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Links