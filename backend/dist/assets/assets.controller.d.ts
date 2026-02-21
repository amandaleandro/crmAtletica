import { AssetsService } from './assets.service';
import { Asset } from '../modules/asset.entity';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    findAll(): Promise<Asset[]>;
    findOne(id: number): Promise<Asset>;
    create(data: Partial<Asset>): Promise<Asset>;
    update(id: number, data: Partial<Asset>): Promise<Asset>;
    remove(id: number): Promise<void>;
}
