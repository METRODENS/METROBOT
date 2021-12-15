FROM METRODENS/metrobot:lovegift

RUN git clone https://github.com/METRODENS/METROBOT /root/METROBOTWhatsappBot
WORKDIR /root/METROBOTWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "metro.js"]
