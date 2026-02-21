import { Repository } from 'typeorm';
import { UiCustomization } from '../modules/ui-customization.entity';
export declare class UiCustomizationService {
    private uiCustomizationRepository;
    constructor(uiCustomizationRepository: Repository<UiCustomization>);
    findByRole(role: string): Promise<UiCustomization | undefined>;
    findAll(): Promise<UiCustomization[]>;
    createOrUpdate(role: string, config: Record<string, any>): Promise<UiCustomization>;
}
