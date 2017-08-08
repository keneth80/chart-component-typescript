import { IDisplay } from '../../i-display.interface';
import { Series } from '../../series/series';

export interface SeriesLabelPluginConfiguration {
    orient: string;
    total: boolean;
}

export class SeriesLabel implements IDisplay {
    _width: number;
    _height: number;
    _seriesLabelContainer: any;
    _seriesLabelConfig: SeriesLabelPluginConfiguration;
    seriesInfo: Series;

    constructor(target: any, config: SeriesLabelPluginConfiguration) {
        this.seriesLabelConfig = config;
        this._createGroupContainer(target);
    }

    set width(value: number) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set height(value: number) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    set seriesLabelConfig(value: SeriesLabelPluginConfiguration) {
        this._seriesLabelConfig = value;
    }

    get seriesLabelConfig() {
        return this._seriesLabelConfig;
    }

    _createGroupContainer(target: any) {
        this._seriesLabelContainer = target.append('g').attr('class', 'textLabel');
    }

    _createSeriesLabel() {

        const rect = this.seriesInfo.target.selectAll('rect');
        setTimeout(() => {
            rect[0].map((r: any) => {
                const targetElement = d3.select(r);
                let textLabel: any = this._seriesLabelContainer.select(`.${targetElement.attr('class')}label`);
                if (!textLabel[0][0]) {
                    textLabel = this._seriesLabelContainer.append('text')
                        .text(targetElement.attr('value'))
                        .attr('fill', 'black')
                        .attr('class', `${targetElement.attr('class')}label`)
                        .attr('y', d3.select(targetElement[0][0].nearestViewportElement).attr('height'));
                }

                const labelWidth: number = textLabel.node().getBoundingClientRect().width;
                const targetWidth: number = targetElement.attr('width');
                const targetHeight: number = targetElement.attr('height');
                const targetX: number = targetElement.attr('x') ? +targetElement.attr('x') : 0;
                const targetY: number = targetElement.attr('y') ? +targetElement.attr('y') : 0;

                if (this.seriesLabelConfig.orient === 'top') {
                    textLabel
                        .transition().delay(700).attr({
                        x: targetX + (targetWidth / 2 ) - (labelWidth / 2),
                        y: targetY - 3
                    });
                } else if (this.seriesLabelConfig.orient === 'right') {
                    console.log('targetWidth', typeof(targetWidth));
                    console.log('targetX', typeof(targetX));
                    textLabel.transition().delay(700).attr({
                        x: targetX  + (targetWidth * 1) + 3,
                        y: targetY + (targetHeight / 2),
                        dy: '.35em'
                    });
                }

            });
        }, 800);
    }

    updateDisplay(width?: number, height?: number) {
        this._createSeriesLabel();
    }
}
