class TaleReport
    def initialize(name, title)
        @src = name
        @title = title
        @char_count = 0
        @word_frequency = Hash.new(0)
        @source_file = nil
        @source_string = ''
        load_file
        @source_string = @source_file.read
    end
    def load_file
        @source_file = File.open @src, 'r'
    end
    def count_characters
        @char_count =  @source_string.size
    end
    def populate_word_freq
       @source_string.split.each {|w| @word_frequency[w] =  @word_frequency[w] + 1 }
    #    p @word_frequency
    end

    def generate_txt
        self.count_characters
        self.populate_word_freq
        file_name = @title + 'report' + '.txt'
        f = File.open file_name , 'w'
        f.write "Word count is #{ @char_count }\n"
        f.write "Word count is #{ @word_frequency }"
        f.close
    end

    def generate_html
        self.count_characters
        self.populate_word_freq
        file_name = @title + 'report' + '.html'
        f = File.open file_name , 'w'
        f.write "<h1>#{ @title }</h1>"
        f.write "<h2>Word count is #{ @char_count }</h2>"
        f.write "<ul>"
        @word_frequency.each {|w, c| f.write "<li>#{w}: #{c}</li>" }
        f.write "</ul>"
        f.close
    end


end

haiku_report = TaleReport.new('haiku.txt', "The Best Haiku")
haiku_report.generate_html