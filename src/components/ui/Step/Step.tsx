interface StepProps {
  number: string;
  title: string;
}

const Step = ({ number, title }: StepProps) => (
  <div className="text-center">
    <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center font-bold">
      {number}
    </div>
    <p className="text-sm font-medium">{title}</p>
  </div>
);

export default Step;