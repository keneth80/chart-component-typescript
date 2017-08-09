import { Legend } from '../../legend/index';
import { LegendConfiguration } from '../../../model/index';

export class SvgLegend extends Legend {

    rectWidth= 10;
    rectHeight = 10;
    padding = 10;

    // chart: any;

    constructor(legendConfig: LegendConfiguration, chartSelector: string) {
        super(legendConfig, chartSelector);
    }

    updateDisplay(width: number, height: number) {
        super.updateDisplay(width, height);
        // this.chart = d3.select(this.chart_selector);
        const items: Array<any> = [];
        const compareWidth: number = this.width - 50;
        const orient: string = this.orient;
        let currentX = 0;
        let currentY = 5;
        let rowCnt = 0;

        this.container.attr('class', 'legend-group')
                      .attr('transform', 'translate(0, 0)');

        this.container.selectAll('*').remove();

        let row: any = this.container.append('g')
            .attr('class', 'legend-row')
            .attr('transform', `translate(0,0)`);
        rowCnt++;
        this.series_config.map((d: any, i: any) => {

            items[d.displayName] = {
                name: d.displayName,
                color: this.colors[i]
            };

            const item = row.append('g')
                .attr('class', 'legend-item')
                .attr('legend-name', d.displayName)
                .attr('transform', `translate(${currentX}, ${currentY})`);

            const rect = item.append('rect')
                .attr('width', this.rectWidth)
                .attr('height', this.rectHeight)
                .style('fill', items[d.displayName].color);

            const text = item.append('text')
                .attr('y', '0.8em')
                .attr('x', 12)
                .style('font-size', '12px')
                .text( d.displayName );

            const bbox: any = item.node().getBBox();

            item.append('rect')
                .attr('width', bbox.width)
                .attr('height', bbox.height)
                .style('fill', '#fff')
                .style('opacity', 0);

            const txtbox: any = text.node().getBBox();

            if ( compareWidth - this.padding < currentX + txtbox.width + ( this.rectWidth + this.padding ) ) {
                currentX = 0;
                currentY += bbox.height + 2;

                row = this.container.append('g')
                    .attr('class', 'legend-row')
                    .attr('transform', `translate(0,0)`);
                rowCnt++;
                row.append( () => {
                    return item.node();
                });
            }

            item.attr('transform', `translate( ${currentX}, ${currentY} )` );
            currentX += item.node().getBBox().width + this.padding;
            this._addEvent(item);
        });
        const containerBox: any = this.container.node().getBBox();
        const group_width: number = containerBox.width;
        const group_height: number = containerBox.height;
        const repositionX: number = (this.width / 2) - (group_width / 2);
        let repositionY: number = (this.height / 2) - (group_height / 2);
        if (rowCnt > 1) {
            this.container.selectAll('.legend-row')
                .attr('transform', function() {
                    const curRow = d3.select(this);
                    const xRowPosition: number = ( compareWidth / 2 - curRow.node().getBBox().width / 2 - 30 );
                    return `translate( ${xRowPosition}, 0 )`;
                });
            repositionY = 0;
        }
        this.container.attr('transform', `translate(${repositionX}, ${repositionY})`);
    }

    _addEvent(item: any) {
        if (!this.chart_selector) {
            return;
        }
        const chart = d3.select(this.chart_selector);

        item.on('mouseover', () => {
            const that: any = d3.select(d3.event.target.parentElement).style('opacity', 1);
            this.container.selectAll('.legend-item').filter( function() {
                const lgname: any = d3.select(this).attr('legend-name');
                return lgname !== that.attr('legend-name');
            }).style('opacity', 0.4);
            const selflg = that.attr('legend-name');
            chart.selectAll('[data-legend]').filter( function() {
                return d3.select(this).attr('data-legend') !== selflg;
            })
            .style('stroke', 'none')
            .style('opacity', 0.4);
            chart.selectAll('[data-legend]').filter( function() {
                return d3.select(this).attr('data-legend') === selflg;
            })
            .style('opacity', 1)
            .style('stroke', 'black');
        }).on('mouseout', () => {
            chart.selectAll('[data-legend]').filter( function() {
                return true;
            })
            .style('opacity', 1)
            .style('stroke', 'none');
            this.container.selectAll('.legend-item').filter( function() {
                return true;
            }).style('opacity', 1);
        }).on('click', () => {
            const selflg = d3.select(d3.event.target.parentElement).attr('legend-name');
            chart.selectAll('[data-legend]').filter( function() {
                return d3.select(this).attr('data-legend') !== selflg;
            })
            .style('stroke', 'none')
            .style('opacity', 0.4);
            chart.selectAll('[data-legend]').filter( function() {
                return d3.select(this).attr('data-legend') === selflg;
            })
            .style('opacity', 1)
            .style('stroke', 'black');
        });
    }

}

