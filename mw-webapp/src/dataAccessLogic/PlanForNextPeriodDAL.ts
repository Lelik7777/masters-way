import {planForNextPeriodToPlanForNextPeriodDTOConverter} from
  "src/dataAccessLogic/BusinessToDTOConverter/planForNextPeriodToPlanForNextPeriodDTOConverter";
import {planForNextPeriodDTOToPlanForNextPeriodConverter} from
  "src/dataAccessLogic/DTOToBusinessConverter/planForNextPeriodDTOToPlanForNextPeriodConverter";
import {PlanForNextPeriod} from "src/model/businessModel/PlanForNextPeriod";
import {PlanForNextPeriodService} from "src/service/PlanForNextPeriodService";

/**
 * Provides methods to interact with the PlanForNextPeriod business model
 */
export class PlanForNextPeriodDAL {

  /**
   * Get PLansForNextPeriod
   */
  public static async getPlansForNextPeriod(): Promise<PlanForNextPeriod[]> {
    const plansForNextPeriodDTO = await PlanForNextPeriodService.getPlansForNextPeriodDTO();
    const plansForNextPeriod = plansForNextPeriodDTO.map(planForNextPeriodDTOToPlanForNextPeriodConverter);

    return plansForNextPeriod;
  }

  /**
   * Get PlanForNextPeriod by uuid
   */
  public static async getPlanForNextPeriod(uuid: string): Promise<PlanForNextPeriod> {
    const PlaForNextPeriodDTO = await PlanForNextPeriodService.getPlanForNextPeriodDTO(uuid);
    const planForNextPeriod = planForNextPeriodDTOToPlanForNextPeriodConverter(PlaForNextPeriodDTO);

    return planForNextPeriod;
  }

  /**
   * Update PlanForNextPeriod
   */
  public static async updatePlanForNextPeriod(planForNextPeriod: PlanForNextPeriod) {
    const planForNextPeriodDTO = planForNextPeriodToPlanForNextPeriodDTOConverter(planForNextPeriod);
    await PlanForNextPeriodService.updatePLanForNextPeriodDTO(planForNextPeriodDTO, planForNextPeriod.uuid);
  }

}