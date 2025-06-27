import './ShareModal.scss'
import { FaTelegramPlane, FaInstagram, FaViber, FaEnvelope } from 'react-icons/fa'

export default function ShareModal({ show, onHide, contact }) {
  if (!show || !contact) return null

  const shareText = `Ім'я: ${contact.firstName} ${contact.lastName}\nТелефон: ${contact.phone}\nEmail: ${contact.email}`
  const encodedText = encodeURIComponent(shareText)

  const telegramUrl = `https://t.me/share/url?url=${encodedText}`
  const viberUrl = `viber://forward?text=${encodedText}`
  const gmailUrl = `mailto:?subject=Контакт&body=${encodedText}`
  const instagramUrl = `https://www.instagram.com/`

  return (
    <div className='modal-overlay' onClick={onHide}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>Share contact</h2>
        <div className='icon-group'>
          <a href={viberUrl} target="_blank" rel='noopener noreferrer'><FaViber className='icon viber' /></a>
          <a href={telegramUrl} target='_blank' rel='noopener noreferrer'><FaTelegramPlane className='icon telegram' /></a>
          <a href={gmailUrl} target='_blank' rel='noopener noreferrer'><FaEnvelope className="icon gmail" /></a>
          <a href={instagramUrl} target='_blank' rel='noopener noreferrer'><FaInstagram className="icon instagram" /></a>
        </div>
        <div className='modal-buttons '>
            <button className='btn btn-outline-info btn-lg px-5' onClick={onHide}>Close</button>
        </div>
      </div>
    </div>
  );
}
