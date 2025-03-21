import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; // Assuming these are correct imports
import { gridItems } from '@/data'; // Assuming this is your grid data
import '../components/aurora.css';

const Grid = () => {
  return (
    <section id="about" className='aurora-background'>
      <BentoGrid>
        {gridItems.map(({ id, description, title, className, imgName, titleClassName, img, spareImg, showAvailableHours }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            imgName={imgName}
            titleClassName={titleClassName}
            img={img}
            spareImg={spareImg}
            showAvailableHours={showAvailableHours} // Pass the prop to BentoGridItem
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;


