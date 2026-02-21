import { Repository } from 'typeorm';
import { Asset } from '../modules/asset.entity';
export declare class AssetsService {
    private assetsRepository;
    constructor(assetsRepository: Repository<Asset>);
    findAll(): Promise<Asset[]>;
    findOne(id: number): Promise<Asset | undefined>;
    create(data: Partial<Asset>): Promise<Asset>;
    update(id: number, data: Partial<Asset>): Promise<Asset>;
    remove(id: number): Promise<void>;
}
