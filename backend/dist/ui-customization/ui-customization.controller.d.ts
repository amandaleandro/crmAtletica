import { UiCustomizationService } from './ui-customization.service';
export declare class UiCustomizationController {
    private readonly uiCustomizationService;
    constructor(uiCustomizationService: UiCustomizationService);
    getByRole(role: string): Promise<import("../modules/ui-customization.entity").UiCustomization>;
    createOrUpdate(body: {
        role: string;
        config: Record<string, any>;
    }): Promise<import("../modules/ui-customization.entity").UiCustomization>;
    getMyConfig(req: any): Promise<import("../modules/ui-customization.entity").UiCustomization>;
}
