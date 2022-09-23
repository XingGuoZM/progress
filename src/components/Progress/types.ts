export type IStage = {
  id: string;
  text: string;
  status: string;
  threshold: string;
};
export interface IProgress {
  amount: string;
  stageList: IStage[];
}
