interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <section className="container mx-auto h-full">{children}</section>;
};

export default Container;
