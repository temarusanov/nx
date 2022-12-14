import { DynamicModule, Module } from '@nestjs/common'
import {
    EventloopFrozenDetectorConfig,
    EVENTLOOP_FROZEN_DETECTOR_CONFIG,
} from './eventloop-frozen-detector.config'
import { EventloopFrozenDetectorService } from './eventloop-frozen-detector.service'

@Module({
    providers: [EventloopFrozenDetectorService],
    exports: [EventloopFrozenDetectorService],
})
export class EventloopFrozenDetectorModule {
    static forRoot(config: EventloopFrozenDetectorConfig): DynamicModule {
        return {
            module: EventloopFrozenDetectorModule,
            providers: [
                {
                    provide: EVENTLOOP_FROZEN_DETECTOR_CONFIG,
                    useValue: config,
                },
            ],
        }
    }
}
