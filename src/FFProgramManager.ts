import {FFMpeg, FFProbe, IFFOutputHandler, IFFProcessOptions} from "./FFProcess";

export class FFMpegProgramManager {
    public options: IFFProcessOptions;
    private ffprobeInstance: FFProbe = null;
    private ffmpegInstance: FFMpeg = null;

    constructor(endHandler?:IFFOutputHandler, options?:IFFProcessOptions) {
        if (require.main == module) {
            throw new Error("FFMpegProgramManager Class cannot be instantiated from the command line. Use FFCLI.js instead");
        }
        if(!(typeof endHandler === 'undefined' && typeof options === 'undefined')) {
            this.run(endHandler, options);
        }
    }

    run(endHandler:IFFOutputHandler, options?: IFFProcessOptions): void {
        
        if (typeof this.options === 'undefined' && typeof options === 'undefined') {
            throw new Error("Options object is undefined. Before running a process you must supply an options object: {input:string, output?:string, process?:string}");
        }

        this.options = options;
        switch (this.options.process) {
            case "ffprobe":
                this.ffprobeInstance = new FFProbe(this.options, endHandler);
                this.ffprobeInstance.run();
                break;
            case "ffmpeg":
                this.ffmpegInstance = new FFMpeg(this.options, endHandler);
                this.ffmpegInstance.run();
                break;

        }

    }
}
