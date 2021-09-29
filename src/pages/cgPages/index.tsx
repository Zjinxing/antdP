import NavBar from '@/components/Navbar';

const Index: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Index;
