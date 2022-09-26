export type IStage = {
  id: string;
  text: string;
  status: string;
  threshold: string;
};
export interface IStageProgress {
  amount: string;
  stageList: IStage[];
}
