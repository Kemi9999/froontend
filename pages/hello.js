// pages/profile.js
import Image from 'next/image';

export default function Profile() {
  const user = {
    name: 'Jane Doe',
    bio: 'Frontend developer passionate about React and Next.js.',
    avatar: '/avatar.jpg', // place your image in the public folder
  };

  return (
    <div className='bg- w-full h-screen'>
    <div style={styles.container} className='bg-white'>
      <Image
        src={user.avatar}
        alt={`${user.name} avatar`}
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
};
