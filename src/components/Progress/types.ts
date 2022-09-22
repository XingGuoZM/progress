type IStage = {
  id: string;
  text: string;
  status: string;
  threshold: string;
};
interface IProgress {
  amount: string;
  stageList: IStage[];
}
export { IProgress, IStage };
